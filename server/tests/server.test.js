const expect  = require("expect"),
      request = require("supertest");

const {app}  = require("./../server"),
      {Todo} = require("./../models/todo");

const todos = [{
    text: "Walk the dog"
},{
    text: "Catch the javelina"
},{
    text: "Chase the coyote"
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
            Todo.find().then((todos) => {
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
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e));
            });
    });
});
