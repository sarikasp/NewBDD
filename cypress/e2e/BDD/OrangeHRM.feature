Feature: Ecommerce Site - Orange HRM

    Scenario: Login with Valid Credentials
        Given Visit Orange HRM site
        When Enter Username and Password
        And Click on login button
        Then Validate the "Dashboard"


    Scenario: Login with Invalid Credentials
        Given Visit Orange HRM site
        When Enter invalid Username and Password
        And Click on login button
        Then Validate the Error


