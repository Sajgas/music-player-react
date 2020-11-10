import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Wildlife',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg',
      artist: 'Philanthrope, chromonicci',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9917',
      color: ['#543325', '#281913'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Chinatown',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-1024x1024.jpg',
      artist: 'SwuM',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7991',
      color: ['#985B60', '#1B283B'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Bliss',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg',
      artist: 'Misha, Jussi Halme',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9248',
      color: ['#55657F', '#B77F86'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Just Wanna Be Free',
      cover:
        'https://chillhop.com/wp-content/themes/chillhop/assets/images/releases/fall-2020/Slipmats-Chillhop-Fall-2020-MockUp.jpg',
      artist: 'Boonie Mayfield',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8949',
      color: ['#82365A', '#8FCAD7'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Changes',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg',
      artist: 'Indécis',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=7952',
      color: ['#FAD8B8', '#9785B1'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
