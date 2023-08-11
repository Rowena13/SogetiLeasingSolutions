Feature: Place an order

  Scenario Outline: Log in and place an order
    Given I log in on the Sogeti Leasing Solutions site
    When I go to the category '<category>' and subcategory '<subcategory>'
    Then I should be able to add a '<product>' to the cart and checkout

    Examples:
      | category | subcategory        | product                 |
      | Dogs     | Very Small Dogs    | Continental Toy Spaniel |
      | Cats     | Medium Haired Cats | Chartreux               |