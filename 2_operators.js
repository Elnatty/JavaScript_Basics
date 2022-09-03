/*
-------------------------------> JavaScript Operators
1: Arithmetic
2: Assignment
3: Comparism
4: Logical

1----------------> Arithmetic Operators (+, -, /, *, %, ++, --)
    const sum1 = 3 + 5 / 2;

2----------------> Assignment Operators (=, +=, -+, *=, /=)
    let x = 5; const x += 3; --> results 8

3----------------> Comparism Operators (<, >, <=, >=, ==, !=, !==, ===)
    const x = 10;
    const y = "10";
    console.log(x == y); --> results true. (because javascript converts x and y to same data type before assigning the comparism operator.)   but...

    console.log(x === y); --> results false (because javascript dosen't converts x and y to same data type before assigning the comparism operator.)
        Note: == --> dosen't care about data types.
              === --> cares about data types.
              ie: ('===' and '==') are same in JS and Python.
                  ('!==' and '!=') are same in JS and Python.
                while:
                  ('==' and '!=' in JS dosent care about datatype as long as the values are equal or not.)
                    example:  let x = 10; let y = "10"
                              console.log(x == 10) --> outputs true
                              console.log(x != 10) --> outputs false
    Note: You cant use the (==, ===, !=, !===) to compare arrays[] and objects{}.
          we use a library called loadash

4----------------> Tenary Operators
    console.log(20 > 40 ? "True" : "False"); --> results to False.

5-----------------> Logical Operator (&&, ||, !)
    (20 === 20) && (10 === 10) --> meaning  both conditions have to be true.
    (20 === 20) || (10 === 12) --> meaning any condition can be true.
    ! --> reverses everything. example:
          !(20 === 20) --> results to false

    Note: '&&' in JS, is same as 'and' in python
          '||' in JS, is same as 'or' in python
          '!' in JS, is same as 'not' in python


----------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================
A RealLife Practical application of Logical Operators..............................

const isUserLoggedIn = true;
const doseUserHavePermissions = false;

const canUsrPerformAction = isUserLoggedIn && doesUserHavePermissions --> meaning that since user is logged in but dosent have permission, then he/she cant perform action.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
===================================================================================

*/

