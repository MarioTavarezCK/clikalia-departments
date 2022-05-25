Feature: El sistema debe tener la funcionalidad para dar de alta un departamento

  Scenario: El usuario ingresa al sistema y da clic en el botón para dar de alta
  	Given Un formulario con la siguiente información: - Price, type, rooms, bathrooms, parking_slots, lat, lon
    When Se llena el formulario y se da clic en el boton de guardar
    Then Se muestra un mensaje donde se indique que se ha dado de alta el departamento

