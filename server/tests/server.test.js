const expect     = require("expect"),
      request    = require("supertest"),
      {ObjectID} = require("mongodb");

const {app}  = require("./../server"),
      {Todo} = require("./../models/todo");

const todos = [{
    _id: new ObjectID(),
    text: "Walk the Dog"
},{
    _id: new ObjectID(),
    text: "Catch the Javelina"
},{
    _id: new ObjectID(),
    text: "Chase the Coyote"
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe("POST /todos", () => {
    it("should create a new todo", (done) => {
        let text = "Test todo text";

    request(app)
        .post("/todos")
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });

    it("should not create todo with invalid body data", (done) => {
        let text = undefined;

        request(app)
            .post("/todos")
            .send({})
            .expect(400)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(3);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe("GET /todos" , () => {
    it("should get all todos", (done) => {
        request(app)
            .get("/todos")
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(3);
            })
            .end(done); //no need for function because nothing is async here
    });
});

describe("GET /todos/:id", () => {
    it("should return todo doc", (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`) //This is the array of todos above getting the object id and converting it to string
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text)
            })
            .end(done);
    });
});
