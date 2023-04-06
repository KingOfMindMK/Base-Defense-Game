const audio = {
    shoot: new Howl({
      src: './audio/basicShootNoise.wav',
      volume: 0.04
    }),
    damageTaken: new Howl({
      src: './audio/damageTaken.wav',
      volume: 0.1
    }),
    explode: new Howl({
      src: './audio/explode.wav',
      volume: 0.1
    }),
    death: new Howl({
      src: './audio/death.wav',
      volume: 0.1
    }),
    powerUpNoise: new Howl({
      src: './audio/powerupNoise.wav',
      volume: 0.1
    }),
    select: new Howl({
      src: './audio/select.wav',
      volume: 0.1,
      html5: true
    }),
    background: new Howl({
      src: './audio/hyper.wav',
      volume: 0.1,
      loop: true
    })
  }