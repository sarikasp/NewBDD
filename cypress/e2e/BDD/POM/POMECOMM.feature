Feature: Ecommerce Site - GREEN KART


    Scenario: E-Commerce Product Delivery
        Given Open E-Commerce Sites
        When Search products which is start from 'ca'
        And Add to Cart "Cashews"
        When Place orders and select country
        Then Validates the Thank you message

    Scenario Outline: E-Commerce Product Delivery
        Given Open E-Commerce Sites
        When Search products which is start from '<startP>'
        And Add to Cart "<Product>"
        When Place orders and select country
        Then Validates the Thank you message

        Examples:
            | startP | Product |
            | ca     | Cashews |
            | br     | Brinjal |
