As stated in the comments, this could maybe have been a generic function using a generic type parameter (although possibly would have run into problems with the stringParseFn).

I think edge cases have been covered & I've added tests for many that I could think of in the time, but possible I have missed some. This would be fixed by adding more tests covering more scenarios.

The stringParseFn assumes that (since we're splitting on a space) only alphanumeric "words" (possibly with $ as given in the examples) must be possible for the variable names, which is perhaps naive - given more time I would've implemented a more robust check here.

There is no specific logic for substituting dates in this code (again, with more time, could have implemented a more complete function), my test simply stringifies a date & substitutes that in for the variable. But, dates could have been handled in the code given some standard. 

The tests could have been written with more business applicable data & with more complex examples - again this is a time constraint issue. 

TEST