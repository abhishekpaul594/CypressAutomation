Feature: End to End Ecommerce validation

    @regression
    Scenario: Order Delivery
        Given I open Ecommerce page
        When I search for
            | searchKey |
            | bro       |
        And I add cashews
        And I place Order

    @smoke
    Scenario: Order Delivery
        Given I open Ecommerce page
        When I search for
            | searchKey |
            | ca        |
        And I add cashews
        And I place Order
