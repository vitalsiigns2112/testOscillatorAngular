import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
	
  gain;
  context: AudioContext;
  oscillatorFrequency: number = 440;
  

  // Essa variável booleana serve pra evitar que seja chamado o método start() duas vezes, já que quando acontece isso dá erro
  // Essa variável é provisória, o ideal seria encontrar um evento que retorne se foi startado ou não 
  isStarted: boolean = false; 

  oscillator;
  oscillator2;
  oscillator3;
  oscillator4;
  oscillator5;

  constructor() { }

  ngOnInit(): void {
	  
	AudioContext = window.AudioContext;
	this.context = new AudioContext();
	
	this.createOscillators();
	
  }
  
  createOscillators() {
	  
	this.oscillator = this.context.createOscillator();
	this.oscillator.frequency.value = this.oscillatorFrequency;
	
	this.oscillator2 = this.context.createOscillator();
	this.oscillator2.frequency.value = this.oscillatorFrequency * 2;
	
	this.oscillator3 = this.context.createOscillator();
	this.oscillator3.frequency.value = this.oscillatorFrequency * 3;
	
	this.oscillator4 = this.context.createOscillator();
	this.oscillator4.frequency.value = this.oscillatorFrequency * 4;
	
	this.oscillator5 = this.context.createOscillator();
	this.oscillator5.frequency.value = this.oscillatorFrequency * 5;

	
	this.gain = this.context.createGain();
	
	this.oscillator.connect(this.gain);
	this.oscillator2.connect(this.gain);
	this.oscillator3.connect(this.gain);
	this.oscillator4.connect(this.gain);
	this.oscillator5.connect(this.gain);
	
	this.gain.connect(this.context.destination); 
	
  }
  
  play() {
	if(!this.isStarted) {
	  this.oscillator.start();
	  this.oscillator2.start();
	  this.oscillator3.start();
	  this.oscillator4.start();
	  this.oscillator5.start();
	  this.isStarted = true;
	} else {
	  this.gain.gain.value = 1;
	}  
	  
  }
  
  stop() {
	this.gain.gain.value = 0;  
	  
  }

}
