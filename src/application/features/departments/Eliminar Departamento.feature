Feature: El sistema debe tener la funcionalidad de quitar un departamento del listado

  Scenario: El usuario ingresa al sistema y da clic en el botón eliminar
  	Given Debe de existir al menos un departamento
    When El usuario da clic en el botón eliminar
    Then El departamento se elimina de la lista

