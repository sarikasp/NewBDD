Feature: Ecommerce Site - Loing exaples

    Scenario: Login with Valid Credentials
        Given Visit Orange HRM sites & login with Custom command


    Scenario Outline: Login with multiple users with Valid Credentials
        Given Visit Practice Automation Site login with "<Username>" and "<Password>" & Dashboard should be visible
        Examples:
            | Username        | Password    |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | Arjun@test.com  | Arjun@12    |
