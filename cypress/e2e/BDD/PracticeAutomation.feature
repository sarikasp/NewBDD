Feature: Ecommerce Site - Practice Automation Testing

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with Username and Password
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
        And click on singin button
        Then Dashboard should be visible




