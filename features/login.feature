Feature: Login Feature

  @login
  Scenario: Login with valid credentials
    Given I Visit the Home page
    When I enter username
    And I enter Password
    And I click on Login button
    Then I verify the name in greeting

 @login
  Scenario: Login with empty fields
    Given I Visit the Home page
    When I click on Login button
    Then I verify the error message as 'Please enter your username.'
