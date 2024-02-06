Feature: Ecommerce Site - Practice Automation Testing

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with Username and Password
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
        And click on singin button
        Then Dashboard should be visible



    Scenario Outline: Login with multiple users with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with "<Username>" and "<Password>"
        And click on singin button
        Then Dashboard should be visible

        Examples:
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |



    Scenario Outline: Login with multiple users with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with "<Username>" and "<Password>"
        And click on singin button
        Then should be visible for "<Credentials>" credentials
        Examples:
            | Username        | Password    | Credentials |
            | sarika@test.com | @Minskole12 | Valid       |
            | gauri@test.com  | 12Minskole@ | Valid       |
            | Arjun@test.com  | Arjun12     | Invalid     |

