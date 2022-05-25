Feature: Lista la información almacenada en un BD en una vista en un proyecto react

  Scenario: El usuario ingresa al sistema y deberá mostrar un listado de departamentos
  	Given Debe existir al menos un departamento registrado
    When Se ve ingresa a la página principal
    Then Se mostrará un listado con el o los departamentos

