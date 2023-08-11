Feature: Compare cars

    Scenario Outline: Compare car id <carIdA> to car id <carIdB> in less than <callbackTimeLimit> seconds
        Given website is working
        Then comparing items '<carIdA>' and '<carIdB>' should be faster than '<callbackTimeLimit>' seconds
        Examples:
            | carIdA | carIdB | callbackTimeLimit |
            | 65     | 66     | 2                 |
            | 70     | 75     | 1                 |
