Feature: Ecommerce Site - GREEN KART

    @focus
    Scenario: E-Commerce Product Delivery
        Given Open E-Commerce Site
        When Search product which is start from ca
        And Add to Kart Cashews
        When Place order and select country
        Then Validate the Thank you message


# npx cypress run --env TAGS="@focus" --headed --browser chrome
# npx cypress run --env TAGS="@focus" --headed --browser chrome