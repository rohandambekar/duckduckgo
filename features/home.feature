Feature: Test Homepage for website - duckduckgo.com


  Scenario: As a user, I want to see the duckduckgo logo on the page

    Given I navigated to duckduckgo website
    When I am on the home page
    And I look at the page
    Then I expect to see the duckduckgo logo on the page


  Scenario: As a user, I want to see exactly 10 suggestions in the typeahead dropdown

    Given I am on the home page
    When I type super into the search box
    Then I expect to see exactly 10 suggestions in the typeahead dropdown


  Scenario: As a user, I want to see first result to be supercalafragalisticexpialadoshus

    Given I am on the home page
    When I type supercalafragalistic into the search box
    Then I expect the first result to be supercalafragalisticexpialadoshus

  
  Scenario: As a user, I want to see a themes link

    Given I am on the home page
    When I click on the hamburger menu in the top right
    Then I expect to see a themes link


  Scenario: As a user, I want to change Background colour

    Given I am on the home page
    When I click on the themes link then click on the dark mode theme button
    Then My page background should change colour

  
  Scenario Outline: As a user, I want to change Background colour

    Given I am on the home page
    When I go to the homepage and type <see-below-test-data-table>
    Then click the magnifying glass
    Then I should get 10 results on the results page

    Examples:
        |  Back to the future|
        |  BMX Bandits|
        |  Rocky IV|
        |  Short Circuit|
        |  The Terminator|
        |  Ferris Bueller's day off|


  Scenario: As a user, I want to verify all months listed

    Given I am on the traffic page
    When I click on the 2018 Traffic section
    Then I should see all the months listed in the order from Dec to Jan
    And The Total Direct Queries should be equal to the sum of all the total directs from each month