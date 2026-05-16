const produtos = [
  // Arduino
  {
    id: 1,
    nome: "Kit Arduino Uno R3 Completo",
    preco: 189.90,
    categoria: "Arduino",
    descricao: "Kit completo com Arduino Uno R3, protoboard, LEDs, resistores, jumpers e sensores básicos. Ideal para iniciantes em eletrônica e robótica.",
    imagem: "/images/arduino-uno.jpg",
    estoque: 15
  },
  {
    id: 2,
    nome: "Arduino Mega 2560",
    preco: 159.90,
    categoria: "Arduino",
    descricao: "Arduino Mega 2560 com 54 pinos digitais, 16 analógicos e 4 seriais. Ideal para projetos que exigem mais memória e I/O.",
    imagem: "/images/arduino-mega.jpg",
    estoque: 9
  },
  {
    id: 3,
    nome: "Arduino Nano Every",
    preco: 79.90,
    categoria: "Arduino",
    descricao: "Versão compacta com microcontrolador ATMega4809, ideal para projetos onde o espaço é limitado.",
    imagem: "/images/arduino-nano.jpg",
    estoque: 22
  },
  {
    id: 4,
    nome: "Kit Arduino com Display LCD",
    preco: 119.90,
    categoria: "Arduino",
    descricao: "Kit Arduino Uno com display LCD 16x2, sensor de temperatura DHT11, potenciômetro e jumpers.",
    imagem: "/images/arduino-lcd.jpg",
    estoque: 18
  },
  {
    id: 5,
    nome: "Arduino Due",
    preco: 219.90,
    categoria: "Arduino",
    descricao: "Placa Arduino baseada no microcontrolador ARM de 32 bits SAM3X8E. Clock de 84MHz, 54 pinos digitais e USB nativa.",
    imagem: "/images/arduino-due.jpg",
    estoque: 7
  },
  // Raspberry Pi
  {
    id: 6,
    nome: "Raspberry Pi 4 Model B 4GB",
    preco: 459.90,
    categoria: "Raspberry Pi",
    descricao: "Minicomputador com processador quad-core 1.8GHz, 4GB RAM, Wi-Fi, Bluetooth e duas saídas micro-HDMI.",
    imagem: "/images/rpi4.jpg",
    estoque: 8
  },
  {
    id: 7,
    nome: "Raspberry Pi Pico W",
    preco: 69.90,
    categoria: "Raspberry Pi",
    descricao: "Microcontrolador com chip RP2040, Wi-Fi integrado, programável em MicroPython e C/C++. Ideal para projetos IoT.",
    imagem: "/images/rpi-pico.jpg",
    estoque: 25
  },
  {
    id: 8,
    nome: "Raspberry Pi Zero 2W",
    preco: 189.90,
    categoria: "Raspberry Pi",
    descricao: "Versão ultra compacta com processador quad-core 1GHz, Wi-Fi e Bluetooth integrados. Perfeito para projetos embarcados.",
    imagem: "/images/rpi-zero.jpg",
    estoque: 12
  },
  {
    id: 9,
    nome: "Kit Raspberry Pi 4 Completo",
    preco: 599.90,
    categoria: "Raspberry Pi",
    descricao: "Kit completo com Raspberry Pi 4 4GB, fonte oficial, cartão SD 32GB, case com cooler e cabo micro-HDMI.",
    imagem: "/images/rpi-kit.jpg",
    estoque: 5
  },
  {
    id: 10,
    nome: "Raspberry Pi 5 8GB",
    preco: 749.90,
    categoria: "Raspberry Pi",
    descricao: "A versão mais poderosa do Raspberry Pi com processador quad-core 2.4GHz, 8GB RAM e conector PCIe.",
    imagem: "/images/rpi5.jpg",
    estoque: 4
  },
  // Kits Robótica
  {
    id: 11,
    nome: "Kit Robô Seguidor de Linha",
    preco: 129.90,
    categoria: "Kits Robótica",
    descricao: "Kit completo para montar um robô seguidor de linha com chassi, motores DC, sensores infravermelhos e ponte H L298N.",
    imagem: "/images/robo-linha.jpg",
    estoque: 20
  },
  {
    id: 12,
    nome: "Braço Robótico 4 Eixos",
    preco: 349.90,
    categoria: "Kits Robótica",
    descricao: "Kit de braço robótico com 4 servomotores SG90, estrutura em acrílico e compatível com Arduino.",
    imagem: "/images/braco-4eixos.jpg",
    estoque: 6
  },
  {
    id: 13,
    nome: "Kit Drone FPV F450",
    preco: 599.90,
    categoria: "Kits Robótica",
    descricao: "Frame F450 com motores brushless 2212, ESC 30A, controladora de voo e hélices. Monte seu próprio drone FPV.",
    imagem: "/images/drone-f450.jpg",
    estoque: 4
  },
  {
    id: 14,
    nome: "Kit Robô 4WD com Bluetooth",
    preco: 199.90,
    categoria: "Kits Robótica",
    descricao: "Robô com 4 rodas motrizes, controlado via Bluetooth pelo smartphone. Inclui chassi, motores, driver e módulo HC-05.",
    imagem: "/images/robo-4wd.jpg",
    estoque: 11
  },
  {
    id: 15,
    nome: "Kit Braço Robótico 6 DOF",
    preco: 489.90,
    categoria: "Kits Robótica",
    descricao: "Braço robótico com 6 graus de liberdade, servomotores MG996R de alta torque e controle via Arduino ou Raspberry Pi.",
    imagem: "/images/braco-6dof.jpg",
    estoque: 3
  },
  // Sensores
  {
    id: 16,
    nome: "Sensor Ultrassônico HC-SR04",
    preco: 19.90,
    categoria: "Sensores",
    descricao: "Sensor de distância ultrassônico com alcance de 2cm a 400cm e precisão de 3mm. Compatível com Arduino e Raspberry Pi.",
    imagem: "/images/sensor-hcsr04.jpg",
    estoque: 50
  },
  {
    id: 17,
    nome: "Kit Sensores 37 em 1",
    preco: 99.90,
    categoria: "Sensores",
    descricao: "Conjunto com 37 módulos de sensores: temperatura, umidade, som, vibração, chama, gás, joystick e muito mais.",
    imagem: "/images/kit-sensores.jpg",
    estoque: 10
  },
  {
    id: 18,
    nome: "Sensor de Temperatura DHT22",
    preco: 29.90,
    categoria: "Sensores",
    descricao: "Sensor digital de temperatura e umidade com alta precisão. Faixa de -40°C a 80°C e umidade de 0 a 100% RH.",
    imagem: "/images/sensor-dht22.jpg",
    estoque: 35
  },
  {
    id: 19,
    nome: "Sensor MPU-6050 Giroscópio",
    preco: 24.90,
    categoria: "Sensores",
    descricao: "Módulo com acelerômetro e giroscópio de 6 eixos. Comunicação I2C, ideal para projetos de drones e robôs.",
    imagem: "/images/sensor-mpu6050.jpg",
    estoque: 28
  },
  {
    id: 20,
    nome: "Sensor de Cor TCS34725",
    preco: 34.90,
    categoria: "Sensores",
    descricao: "Sensor de reconhecimento de cores RGB com filtro IR e luz branca. Comunicação I2C, compatível com Arduino.",
    imagem: "/images/sensor-cor.jpg",
    estoque: 19
  },
  // Shields
  {
    id: 21,
    nome: "Shield Motor Driver L293D",
    preco: 34.90,
    categoria: "Shields",
    descricao: "Shield para controle de até 4 motores DC ou 2 motores de passo. Encaixe direto no Arduino Uno e Mega.",
    imagem: "/images/shield-motor.jpg",
    estoque: 30
  },
  {
    id: 22,
    nome: "Display LCD 16x2 com I2C",
    preco: 29.90,
    categoria: "Shields",
    descricao: "Display LCD 16 colunas por 2 linhas com módulo I2C adaptador. Usa apenas 2 fios de dados, compatível com Arduino.",
    imagem: "/images/display-lcd.jpg",
    estoque: 40
  },
  {
    id: 23,
    nome: "Shield Ethernet W5100",
    preco: 49.90,
    categoria: "Shields",
    descricao: "Shield de rede Ethernet para Arduino com chip W5100, conector RJ45 e suporte a TCP/IP nativo.",
    imagem: "/images/shield-ethernet.jpg",
    estoque: 14
  },
  {
    id: 24,
    nome: "Display OLED 0.96\" I2C",
    preco: 39.90,
    categoria: "Shields",
    descricao: "Display OLED 128x64 pixels monocromático com interface I2C. Alta visibilidade, baixo consumo e fácil integração.",
    imagem: "/images/display-oled.jpg",
    estoque: 24
  },
  {
    id: 25,
    nome: "Shield Relé 4 Canais",
    preco: 27.90,
    categoria: "Shields",
    descricao: "Módulo com 4 relés de 10A para controle de cargas AC/DC. Optoacoplado, compatível com Arduino e ESP32.",
    imagem: "/images/shield-rele.jpg",
    estoque: 33
  },
  // ESP32
  {
    id: 26,
    nome: "Kit ESP32 com Display OLED",
    preco: 89.90,
    categoria: "ESP32",
    descricao: "Módulo ESP32 com Wi-Fi e Bluetooth integrados, acompanha display OLED 0.96\", cabo USB e guia de projetos IoT.",
    imagem: "/images/esp32-oled.jpg",
    estoque: 12
  },
  {
    id: 27,
    nome: "ESP32 DevKit V1",
    preco: 49.90,
    categoria: "ESP32",
    descricao: "Placa de desenvolvimento ESP32 com Wi-Fi 802.11 b/g/n, Bluetooth 4.2, 38 pinos e processador dual-core 240MHz.",
    imagem: "/images/esp32-devkit.jpg",
    estoque: 30
  },
  {
    id: 28,
    nome: "ESP32-CAM com Câmera OV2640",
    preco: 69.90,
    categoria: "ESP32",
    descricao: "Módulo ESP32 com câmera OV2640 2MP integrada. Ideal para projetos de vigilância, reconhecimento facial e IoT.",
    imagem: "/images/esp32-cam.jpg",
    estoque: 9
  },
  {
    id: 29,
    nome: "Kit IoT ESP32 com Sensores",
    preco: 129.90,
    categoria: "ESP32",
    descricao: "Kit completo com ESP32, sensor DHT22, BMP280, display OLED e módulo relé para projetos de automação residencial.",
    imagem: "/images/esp32-kit.jpg",
    estoque: 8
  },
  {
    id: 30,
    nome: "ESP32-S3 DevBoard",
    preco: 99.90,
    categoria: "ESP32",
    descricao: "Versão mais recente do ESP32 com suporte a USB nativa, AI acceleration, processador dual-core 240MHz e 8MB de flash.",
    imagem: "/images/esp32-s3.jpg",
    estoque: 6
  },
]

export default produtos