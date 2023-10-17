interface WordInterface {
  level: number, // 난이도
  language: string,
  word: string, // 단어
  first_vowel: string, // 단어 첫 모음
  first_consonant: string, // 단어 첫 자음
  image?: string, // 이미지 파일 경로
  description?: string, // 단어 설명
  categories?: string[], // 단어 분류
}

// ㄱ ㄲ ㄴ ㄷ ㄸ ㄹ ㅁ ㅂ ㅃ ㅅ ㅆ ㅇ ㅈ ㅉ ㅊ ㅋ ㅌ ㅍ ㅎ
// ㅏ ㅐ ㅑ ㅒ ㅓ ㅔ ㅕ ㅖ ㅗ ㅘ ㅙ ㅚ ㅛ ㅜ ㅝ ㅞ ㅟ ㅠ ㅡ ㅢ ㅣ

const Korean:WordInterface[] = [
  {level: 1 , language: 'korean'  , word: '가위', first_vowel: 'ㅏ', first_consonant: 'ㄱ', },
  {level: 2 , language: 'korean'  , word: '가자미', first_vowel: 'ㅏ', first_consonant: 'ㄱ', },
  {level: 2 , language: 'korean'  , word: '가오리', first_vowel: 'ㅏ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '강아지', first_vowel: 'ㅏ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '갈매기', first_vowel: 'ㅏ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '감나무', first_vowel: 'ㅏ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '개미', first_vowel: 'ㅐ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '개구리', first_vowel: 'ㅐ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '개나리', first_vowel: 'ㅐ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '거미', first_vowel: 'ㅓ', first_consonant: 'ㄱ', },
  {level: 2 , language: 'korean'  , word: '거위', first_vowel: 'ㅓ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '고래', first_vowel: 'ㅗ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '고등어', first_vowel: 'ㅗ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '고양이', first_vowel: 'ㅗ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '구름', first_vowel: 'ㅜ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '기러기', first_vowel: 'ㅣ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '기린', first_vowel: 'ㅣ', first_consonant: 'ㄱ', },
  {level: 1 , language: 'korean'  , word: '까치', first_vowel: 'ㅏ', first_consonant: 'ㄲ', },
  {level: 1 , language: 'korean'  , word: '까마귀', first_vowel: 'ㅏ', first_consonant: 'ㄲ', },
  {level: 1 , language: 'korean'  , word: '꽃사슴', first_vowel: 'ㅗ', first_consonant: 'ㄲ', },
  {level: 1 , language: 'korean'  , word: '나무', first_vowel: 'ㅏ', first_consonant: 'ㄴ', },
  {level: 1 , language: 'korean'  , word: '나비', first_vowel: 'ㅏ', first_consonant: 'ㄴ', },
  {level: 2 , language: 'korean'  , word: '난', first_vowel: 'ㅏ', first_consonant: 'ㄴ', },
  {level: 2 , language: 'korean'  , word: '냉장고', first_vowel: 'ㅐ', first_consonant: 'ㄴ', },
  {level: 2 , language: 'korean'  , word: '노루', first_vowel: 'ㅗ', first_consonant: 'ㄴ', },
  {level: 2 , language: 'korean'  , word: '누룽지', first_vowel: 'ㅜ', first_consonant: 'ㄴ', },
  {level: 2 , language: 'korean'  , word: '닉네임', first_vowel: 'ㅣ', first_consonant: 'ㄴ', },
  {level: 2 , language: 'korean'  , word: '다람쥐', first_vowel: 'ㅏ', first_consonant: 'ㄷ', },
  {level: 2 , language: 'korean'  , word: '대한민국', first_vowel: 'ㅐ', first_consonant: 'ㄷ', },
  {level: 2 , language: 'korean'  , word: '도마뱀', first_vowel: 'ㅗ', first_consonant: 'ㄷ', },
  {level: 2 , language: 'korean'  , word: '두꺼비', first_vowel: 'ㅜ', first_consonant: 'ㄷ', },
  {level: 2 , language: 'korean'  , word: '디딤돌', first_vowel: 'ㅣ', first_consonant: 'ㄷ', },
  {level: 2 , language: 'korean'  , word: '라디오', first_vowel: 'ㅏ', first_consonant: 'ㄹ', },
  {level: 2 , language: 'korean'  , word: '로봇', first_vowel: 'ㅗ', first_consonant: 'ㄹ', },
  {level: 2 , language: 'korean'  , word: '리듬', first_vowel: 'ㅣ', first_consonant: 'ㄹ', },
  {level: 1 , language: 'korean'  , word: '마침표', first_vowel: 'ㅏ', first_consonant: 'ㅁ', },
  {level: 1 , language: 'korean'  , word: '말', first_vowel: 'ㅏ', first_consonant: 'ㅁ', },
  {level: 1 , language: 'korean'  , word: '무궁화', first_vowel: 'ㅜ', first_consonant: 'ㅁ', },
  {level: 2 , language: 'korean'  , word: '믹서기', first_vowel: 'ㅣ', first_consonant: 'ㅁ', },
  {level: 1 , language: 'korean'  , word: '바지', first_vowel: 'ㅏ', first_consonant: 'ㅂ', },
  {level: 1 , language: 'korean'  , word: '버스', first_vowel: 'ㅓ', first_consonant: 'ㅂ', },
  {level: 1 , language: 'korean'  , word: '빗', first_vowel: 'ㅣ', first_consonant: 'ㅂ', },
  {level: 1 , language: 'korean'  , word: '빗살무늬', first_vowel: 'ㅣ', first_consonant: 'ㅂ', },
  {level: 1 , language: 'korean'  , word: '사과', first_vowel: 'ㅏ', first_consonant: 'ㅅ', },
  {level: 1 , language: 'korean'  , word: '사자', first_vowel: 'ㅏ', first_consonant: 'ㅅ', },
  {level: 1 , language: 'korean'  , word: '손목시계', first_vowel: 'ㅗ', first_consonant: 'ㅅ', },
  {level: 1 , language: 'korean'  , word: '시계', first_vowel: 'ㅣ', first_consonant: 'ㅅ', },
  {level: 1 , language: 'korean'  , word: '시루떡', first_vowel: 'ㅣ', first_consonant: 'ㅅ', },
  {level: 1 , language: 'korean'  , word: '선풍기', first_vowel: 'ㅓ', first_consonant: 'ㅅ', },
  {level: 1 , language: 'korean'  , word: '아기', first_vowel: 'ㅏ', first_consonant: 'ㅇ', },
  {level: 1 , language: 'korean'  , word: '원숭이', first_vowel: 'ㅝ', first_consonant: 'ㅇ', },
  {level: 1 , language: 'korean'  , word: '앵무새', first_vowel: 'ㅐ', first_consonant: 'ㅇ', },
  {level: 1 , language: 'korean'  , word: '이름표', first_vowel: 'ㅣ', first_consonant: 'ㅇ', },
  {level: 1 , language: 'korean'  , word: '자동차', first_vowel: 'ㅏ', first_consonant: 'ㅈ', },
  {level: 2 , language: 'korean'  , word: '자두', first_vowel: 'ㅏ', first_consonant: 'ㅈ', },
  {level: 1 , language: 'korean'  , word: '자라', first_vowel: 'ㅏ', first_consonant: 'ㅈ', },
  {level: 1 , language: 'korean'  , word: '자물쇠', first_vowel: 'ㅏ', first_consonant: 'ㅈ', },
  {level: 1 , language: 'korean'  , word: '진달래', first_vowel: 'ㅣ', first_consonant: 'ㅈ', },
  {level: 2 , language: 'korean'  , word: '차남', first_vowel: 'ㅏ', first_consonant: 'ㅊ', },
  {level: 1 , language: 'korean'  , word: '차선', first_vowel: 'ㅏ', first_consonant: 'ㅊ', },
  {level: 1 , language: 'korean'  , word: '치아', first_vowel: 'ㅣ', first_consonant: 'ㅊ', },
  {level: 1 , language: 'korean'  , word: '카메라', first_vowel: 'ㅏ', first_consonant: 'ㅋ', },
  {level: 1 , language: 'korean'  , word: '코끼리', first_vowel: 'ㅗ', first_consonant: 'ㅋ', },
  {level: 1 , language: 'korean'  , word: '코알라', first_vowel: 'ㅗ', first_consonant: 'ㅋ', },
  {level: 1 , language: 'korean'  , word: '키위', first_vowel: 'ㅣ', first_consonant: 'ㅋ', },
  {level: 1 , language: 'korean'  , word: '파랑', first_vowel: 'ㅏ', first_consonant: 'ㅍ', },
  {level: 1 , language: 'korean'  , word: '파랑새', first_vowel: 'ㅏ', first_consonant: 'ㅍ', },
  {level: 1 , language: 'korean'  , word: '표범', first_vowel: 'ㅏ', first_consonant: 'ㅍ', },
  {level: 1 , language: 'korean'  , word: '피아노', first_vowel: 'ㅣ', first_consonant: 'ㅍ', },
  {level: 1 , language: 'korean'  , word: '하나님', first_vowel: 'ㅏ', first_consonant: 'ㅎ', },
  {level: 1 , language: 'korean'  , word: '하늘', first_vowel: 'ㅏ', first_consonant: 'ㅎ', },
  {level: 3 , language: 'korean'  , word: '하드웨어', first_vowel: 'ㅏ', first_consonant: 'ㅎ', },
  {level: 1 , language: 'korean'  , word: '하르방', first_vowel: 'ㅏ', first_consonant: 'ㅎ', },
  {level: 2 , language: 'korean'  , word: '하수도', first_vowel: 'ㅏ', first_consonant: 'ㅎ', },
  {level: 1 , language: 'korean'  , word: '하회탈', first_vowel: 'ㅏ', first_consonant: 'ㅎ', },
  {level: 1 , language: 'korean'  , word: '해파리', first_vowel: 'ㅐ', first_consonant: 'ㅎ', },
  {level: 1 , language: 'korean'  , word: '호랑이', first_vowel: 'ㅗ', first_consonant: 'ㅎ', },
  {level: 1 , language: 'korean'  , word: '힘껏', first_vowel: 'ㅣ', first_consonant: 'ㅎ', },
];