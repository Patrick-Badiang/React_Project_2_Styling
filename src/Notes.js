/*

-----------------Section 6---------------------
Ep 1 (75)

Despite the styling already being implemented there are better ways to do it.
Applying the styles through regular css selectors isn't the best.

The problem right now is that the user can add an empty goal.
To fix this we add an if statement in the CourseInput class so that it can check 
if the user has a valid title(enteredValue.trim().length === 0) for the goal before triggering the onAddGoal function
HOWEVER!

We don't give the user any feedback when they input an invalid title so that's where styling gets involved
To do this we use a state that is an indicator o whether the user submitted and entered something valid or not

BOOLEAN

style = {{color : !isValid ? 'red' : 'blue;}}
TRANSLATION: if isValid is NOT true then the color is red, otherwise it's blue

since we want to also change the bordercolor we pass in borderColor not color because we are in js and we also
want it to be red or black

Currently we cannot reset the styles so heres how to fix it:
-go to the place where we react to every keystroke 
-check if event.target.value > 0 then setIsValid to True.

Right now the In-line-styles aren't very good, but they work
They aren't good because they take priority and cause overriding as well as duplication

Ep 2 (76)

How to dynamically change styles

What alternative is there instead of inline styles?
 We Could:
    - Add a new css class to the div
    - Add the class dynamically ONLY if the value entered is invalid
    -This invalid class should only sometimes be added on the div
    - Then in the css we can prepare it

    .form-control.invalid input { boredr-color: red; background: red}
    .form-control.invalid label { color : red}
    ^^^^Will result in the desired styling so we just need to add the class dynamically

    Instead of the inline text we give the div className { 'form-control'}
    Due to it being in curly brackets we now can dynamically change the string between 
    'form-control' and 'form-control.invalid' depending on the isValid State

    For that we can use a construct (``) which is a default java feature that is a template literal
    it constructs a string that whatever is in there is treasted like a string
    the special part is that we can dynamically ENJEct a string with the syntax ${}

    Now we can check !isValid ? 'invalid' : ''


Ep 3 (77)

Now we need to dive into how to style components.

Remember: "Applying the styles through regular css selectors isn't the best."
The reason is is because that the style won't be scoped to one object so if something else in the DOM had a
css class that shared the same name then it would be affected.

This isn't nessecarily a big problem, we can just be careful with the selectors but in larger projects with a lot of other developers
there's a chance a name will be used twice

SOLUTION:

we can use a package called "styled components"
    - 
or we can
*/
