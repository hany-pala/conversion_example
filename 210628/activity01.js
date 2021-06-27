/**
 * 음악 재생 목록 구현하기
 * 여러 개의 음악을 이용하여 재생 목록을 생성할 수 있습니다.
 * 재생 목록에 음악 추가할 수 있어야 합니다.
 * 재생 목록에서 음악을 제거할 수 있어야 합니다.
 * 음악을 순환적으로 재생할 수 있어야 합니다. ( 기능 구현은 노래 제목 출력으로 대신)
 * 
 * 개발 순서
 * 원형 데이터 표현을 지원하는 기본 구조 설계해야함
 * 앞에서 만든 구조에 데이터 삽입 및 삭제 기능 구현
 * 사용자 정의 반복자 작성 : 범위 기반 for 반복자문 사용해 모든 원소에 접근 할 수 있도록 반복자를 설계해야함
 * 자료 구조는 원형이지만 begin()과 end() 함수는 각각 다른 주소를 반환해야 함
 * 기본 컨테이너를 만든 후, 이 컨테이너를 기반ㅇ로 재생 목록에 여러 음악을 저장하고 next(), previos(), printall(), insert(), remove() 함수를 구현
 */

 /**
  * 의사코드
  * 원형 데이터 표현 : 동적 배열 마지막 원소 값에 다 다를시, 첫번째 원소로 되돌아온다.
  * 삽입 및 삭제 구현 : 해당 엘리먼트의 제목으로 삭제 또는, 해당 엘리먼트의 index 값으로 삭제, 삽입은 제일 마지막으로 들어간다.
  * 사용자 정의 반복자 구현 : 해당 엘리먼트의 노래 타임만큼 재생되며 다다를시, 다음 재생항목으로 넘어간다. 마지막에 다다를시, 첫번째 노래로 되돌아온다. 
  * (반복재생일시) / [한곡 반복 재생 / 전곡 반복 재생 / 플레이 리스트 재생]
  * 
  * 노래 element에 대해 정의 [ 제목 / 시간 / 작곡가 ]
  * mp3 정의 [ 반복 옵션 / 노래 추가 / 노래 삭제 / 첫번째 곡 조회 / 마지막곡 조회 / 다음 노래 재생 / 이전곡 재생 / 전곡 조회 ]
  * 
  * 
*/

class Sing {
  
  title = '';
  time = 0;
  author = '';
  
  constructor(title, time, author) {
    this.title = title;
    this.time = time;
    this.author = author;
  }
}


let checkParamSingOject = (title, time, author) => {
  //null check
  if (!title || !time || !author) {
    console.log('null param check false');
    return false;
  }
  if (typeof title !== 'string' || typeof time !== 'number' || typeof author !== 'string') {
    console.log('type param check false');
    return false;
  }
};

const PLAYING_ONE_SING = 0;
const PLAYING_ALL_SING = 1;
const PLAYING_ALL_SING_ONETIME = 2;

let musicList = [];


let playingTime = 0;
let currentPlayingIndex = 0;

// 플레이리스트에 있는 노래를 재생한다.
// 노래가 있는 경우 재생한다. 

let playMp3 = (option) => {
  if (musicList.length < 1) {
    console.log('현재 재생 목록이 없습니다.');
  }
  playingTime = Date.now();
  
  playSing(musicList[currentPlayingIndex], option);
}

let playSing = (sing, option) => {
  intervalId = setInterval(function() {
    singHandler(sing, option)
  }, 1000);
}

//재생 옵션
let checkPlayListOptionReplay = (option) => {
  let isLastSong = currentPlayingIndex === musicList.length - 1 ? true : false;
  
  console.log(isLastSong, option, currentPlayingIndex, musicList.length);
  
  if (option === PLAYING_ONE_SING) {
    playMp3(option);
  } else if (option === PLAYING_ALL_SING && isLastSong) {
    currentPlayingIndex = 0;
    playMp3(option);
  } else if (option === PLAYING_ALL_SING) {
    currentPlayingIndex += 1;
    playMp3(option);
  } else if (option === PLAYING_ALL_SING_ONETIME && isLastSong) {
    console.log('모든 재생이 완료되었습니다. 다시 실행해주세요!');
  } else if (option === PLAYING_ALL_SING_ONETIME) {
    currentPlayingIndex += 1;
    playMp3(option);
  } else {
    console.log('에러가 발생했습니다.');
  }
}

let intervalId;
//현재 재생이 끝나고 다음 항목으로 넘어간다.
let singHandler = (sing, option) => {
  console.log(`${sing.title} ${sing.time} ${playingTime} 노래 재생중 !`);
  let currentTime = Date.now();
  let playedTime = (currentTime - playingTime) / 1000;
  console.log(playedTime);
  if (sing.time <= playedTime && intervalId) {
    clearInterval(intervalId);
    checkPlayListOptionReplay(option);
  }
}


//플레이리스트 삽입
let addSingToPlaylist = (elm) => {
  musicList.push(elm);
}

//플레이리스트 삭제
let removeSingToPlaylist = (elm) => {
  musicList.some((sing, index) => {
    if (elm.title === sing.title && elm.time === sing.time && elm.author === sing.author) {
      console.log('remove sing index: ', index, sing.title);
      musicList = musicList.splice(index, 1);
      return true;
    }
  });
}


let balad = new Sing('나를 아는 사람', 5, '유야호');
let dance = new Sing('곰 세마리', 3, '곰인형');
let pop = new Sing('peaches', 2, '비버');


addSingToPlaylist(balad);
addSingToPlaylist(dance);
addSingToPlaylist(pop);

playMp3(PLAYING_ALL_SING_ONETIME);



