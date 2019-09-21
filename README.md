# online_Hackathon

##　Django起動方法
`cd aruduino`
`python3 manage.py runserver 0.0.0.0:8000`

現在は、Arduinoを接続して、以下のプログラムを組むとDjango上からLEDのON/OFFができます。
```c
const int led_pin =  9;      
int led_state = 0;

int button_state = 0;

void setup() {
  pinMode(led_pin, OUTPUT);   
  Serial.begin(9600);

}

void loop() {
  if (Serial.read() != -1) {
    led_state = ~led_state;
    digitalWrite(led_pin, led_state);
  }
}
```
