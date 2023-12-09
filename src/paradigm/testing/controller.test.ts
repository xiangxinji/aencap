import { Controller } from "../controller/controller"

class TestState {
    value = 1
    current = 10 
}
class TestController extends Controller<TestState> {

    constructor() {
        super(TestState)
    }


    run() {


    }
}

const t = new TestController()