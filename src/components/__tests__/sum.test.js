import {sum} from '../sum'

test("",()=>{
    const result = sum(2,9)

    //Asserstion
    expect (result).toBe(11)
})