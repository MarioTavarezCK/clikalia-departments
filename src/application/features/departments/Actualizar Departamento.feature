Feature: El sistema debe tener la funcionalidad de actualizar las propiedades de un departamento

  Scenario: El usuario ingresa al sistema y da clic en el botón editar
  	Given Debe de existir al menos un departamento
    When El usuario da clic en el botón editar y se edita cualquiera de los campos (Price, type, rooms, bathrooms, parking_slots, lat, lon)
    Then Se muestra un mensaje donde se indique que se ha dado modificado el departamento

