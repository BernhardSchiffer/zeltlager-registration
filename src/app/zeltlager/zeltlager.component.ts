import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Registration } from "../models/Registration";
import { Question } from "../models/Question";
import { confetti } from "dom-confetti";

@Component({
  selector: "app-zeltlager",
  templateUrl: "./zeltlager.component.html",
  styleUrls: ["./zeltlager.component.css"]
})
export class ZeltlagerComponent implements OnInit {
  registrationForm: FormGroup;
  formData: any;
  firstname: string;
  lastname: string;
  birthday: Date;
  telefon: string;
  email: string;
  address: string;
  postcode: number;
  city: string;
  needMedicine: boolean;
  medicine: string;
  insurant: string;
  insurance: string;
  canSwim: boolean;
  isVegetarian: string;
  isVegan: string;
  misc: string;
  passengersArrival: number = 0;
  passengersDeparture: number = 0;

  questionForm: FormGroup;
  questionName: string;
  questionEmail: string;
  question: string;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstname: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[^0-9]{1,}")
        ])
      ],
      lastname: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[^0-9]{1,}")
        ])
      ],
      birthday: [null, Validators.required],
      address: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[A-Za-z,. 0-9ßÄ-Üä-ü]{5,}")
        ])
      ],
      postcode: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]{5}")
        ])
      ],
      city: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[A-Za-zÄ-Üä-üß ]{1,}")
        ])
      ],
      telefon: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9 /-]{6,}")
        ])
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[A-Za-z0-9._%+-ß?$&]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
          )
        ])
      ],
      medicine: "",
      insurant: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[^0-9]{1,}")
        ])
      ],
      insurance: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[A-Za-z, 0-9ßÄ-Üä-ü]{1,}")
        ])
      ],
      canSwim: ["yes", Validators.required],
      isVegetarian: "",
      isVegan: "",
      misc: "",
      passengersArrival: [
        0,
        Validators.compose([Validators.min(0), Validators.max(10)])
      ],
      passengersDeparture: [
        0,
        Validators.compose([Validators.min(0), Validators.max(10)])
      ]
    });

    this.questionForm = this.fb.group({
      questionName: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("[^0-9]{1,}")
        ])
      ],
      questionEmail: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "[A-Za-z0-9._%+-ß?$&]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
          )
        ])
      ],
      question: [null, Validators.required]
    });
  }

  ngOnInit() {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        panel.classList.toggle("active");
      });
    }
  }

  scrollToContent() {
    document.getElementById("zeltlager").scrollIntoView({ behavior: "smooth" });
  }

  async sendRegistration(formData) {
    console.log("try to post data");
    event.preventDefault();

    const confettiCanon1: HTMLElement = document.querySelector(
      "#confettiCanon1"
    );
    const confettiCanon2: HTMLElement = document.querySelector(
      "#confettiCanon2"
    );
    const confettiConfig1 = {
      angle: 60,
      spread: 70,
      startVelocity: 70,
      elementCount: 200,
      dragFriction: 0.1,
      duration: 5000,
      delay: 0,
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const confettiConfig2 = {
      angle: 120,
      spread: 70,
      startVelocity: 70,
      elementCount: 200,
      dragFriction: 0.1,
      duration: 5000,
      delay: 0,
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    let myForm: HTMLFormElement = document.forms["registrationForm"];
    let registrierung: Registration = await new Registration(formData);

    fetch("/api/registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registrierung)
    }).then(res => {
      myForm.reset();
      this.registrationForm.controls["passengersArrival"].setValue(0);
      this.registrationForm.controls["passengersDeparture"].setValue(0);

      confetti(confettiCanon1, confettiConfig1);
      confetti(confettiCanon2, confettiConfig2);
    });
    return false;
  }

  async sendQuestion(formData) {
    event.preventDefault();
    let myForm: HTMLFormElement = document.forms["questionForm"];
    let question = await new Question(formData);

    let res = await fetch("http://localhost:81/api/question/zeltlager", {
      credentials: "same-origin",
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(question)
    }).then(res => {
      myForm.reset();
    });
    return false;
  }
}
