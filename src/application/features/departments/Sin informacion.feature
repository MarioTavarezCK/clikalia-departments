Feature: El sistema debe indicar cuando no existan departamentos dados de alta

  Scenario: El usuario ingresa al sistema
  	Given No deben existir departementos registrados previamente
    When Se ve ingresa a la página principal
    Then Se muestra un mensaje que indique que no se han dado de alta los departamentos

