Feature: Google Page


    Scenario: Opening search engine page
        Given I open google page
        When I see "Google" in the title
        Then I see "google" in the url
