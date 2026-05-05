/* main.js */

document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.closest('.entry-body');
    body.classList.toggle('is-expanded');
  });
});

const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('is-visible', window.scrollY > 300);
  }, { passive: true });
}

const isRu = document.documentElement.lang === 'ru';

if (isRu) {
  console.log(
    '%cЭй! Что вы здесь ищете? Здесь нет ничего подозрительного.\n' +
    'Просто красиво скомпонованные HTML-теги, стилизованные с помощью CSS со щепоткой JavaScript магии.\n',
    'color:#1a6fa8;line-height:1.5;'
  );
  console.log('%c> попробуйте ввести resume', 'color:#ffffff;font-family:"Share Tech Mono",monospace;');
} else {
  console.log(
    '%cHey! What are you looking here for? There\'s nothing fishy going on here.\n' +
    'Just HTML tags beautifully put together, styled with CSS with a pinch of JavaScript magic.\n',
    'color:#1a6fa8;line-height:1.5;'
  );
  console.log('%c> try typing resume', 'color:#ffffff;font-family:"Share Tech Mono",monospace;');
}

function showEasterEgg() {
  if (isRu) {
    console.log(
      '%cНу раз уж вы здесь...\n' +
      'Я хочу поделиться с вами знаменитой строфой из романа в стихах "Евгений Онегин" Александра Пушкина. Наслаждайтесь!',
      'color:#d4881a;font-weight:bold;line-height:1.5;'
    );
    console.log('%c*** Письмо Татьяны к Онегину ***', 'color:#c41a1a;font-weight:bold;line-height:1.5;font-style: italic;');
    console.log(
      '%cЯ к вам пишу — чего же боле?\n' +
      'Что я могу еще сказать?\n' +
      'Теперь, я знаю, в вашей воле\n' +
      'Меня презреньем наказать.\n' +
      'Но вы, к моей несчастной доле\n' +
      'Хоть каплю жалости храня,\n' +
      'Вы не оставите меня.\n' +
      'Сначала я молчать хотела;\n' +
      'Поверьте: моего стыда\n' +
      'Вы не узнали б никогда,\n' +
      'Когда б надежду я имела\n' +
      'Хоть редко, хоть в неделю раз\n' +
      'В деревне нашей видеть вас,\n' +
      'Чтоб только слышать ваши речи,\n' +
      'Вам слово молвить, и потом\n' +
      'Все думать, думать об одном\n' +
      'И день и ночь до новой встречи.\n' +
      'Но, говорят, вы нелюдим;\n' +
      'В глуши, в деревне все вам скучно,\n' +
      'А мы... ничем мы не блестим,\n' +
      'Хоть вам и рады простодушно.\n\n' +
      'Зачем вы посетили нас?\n' +
      'В глуши забытого селенья\n' +
      'Я никогда не знала б вас,\n' +
      'Не знала б горького мученья.\n' +
      'Души неопытной волненья\n' +
      'Смирив со временем (как знать?),\n' +
      'По сердцу я нашла бы друга,\n' +
      'Была бы верная супруга\n' +
      'И добродетельная мать.\n\n' +
      'Другой!.. Нет, никому на свете\n' +
      'Не отдала бы сердца я!\n' +
      'То в вышнем суждено совете...\n' +
      'То воля неба: я твоя;\n' +
      'Вся жизнь моя была залогом\n' +
      'Свиданья верного с тобой;\n' +
      'Я знаю, ты мне послан богом,\n' +
      'До гроба ты хранитель мой...\n' +
      'Ты в сновиденьях мне являлся\n' +
      'Незримый, ты мне был уж мил,\n' +
      'Твой чудный взгляд меня томил,\n' +
      'В душе твой голос раздавался\n' +
      'Давно... нет, это был не сон!\n' +
      'Ты чуть вошел, я вмиг узнала,\n' +
      'Вся обомлела, запылала\n' +
      'И в мыслях молвила: вот он!\n' +
      'Не правда ль? я тебя слыхала:\n' +
      'Ты говорил со мной в тиши,\n' +
      'Когда я бедным помогала\n' +
      'Или молитвой услаждала\n' +
      'Тоску волнуемой души?\n' +
      'И в это самое мгновенье\n' +
      'Не ты ли, милое виденье,\n' +
      'В прозрачной темноте мелькнул,\n' +
      'Приникнул тихо к изголовью?\n' +
      'Не ты ль, с отрадой и любовью,\n' +
      'Слова надежды мне шепнул?\n' +
      'Кто ты, мой ангел ли хранитель,\n' +
      'Или коварный искуситель:\n' +
      'Мои сомненья разреши.\n' +
      'Быть может, это все пустое,\n' +
      'Обман неопытной души!\n' +
      'И суждено совсем иное...\n' +
      'Но так и быть! Судьбу мою\n' +
      'Отныне я тебе вручаю,\n' +
      'Перед тобою слезы лью,\n' +
      'Твоей защиты умоляю...\n' +
      'Вообрази: я здесь одна,\n' +
      'Никто меня не понимает,\n' +
      'Рассудок мой изнемогает,\n' +
      'И молча гибнуть я должна.\n' +
      'Я жду тебя: единым взором\n' +
      'Надежды сердца оживи\n' +
      'Иль сон тяжелый перерви,\n' +
      'Увы, заслуженным укором!\n\n' +
      'Кончаю! Страшно перечесть...\n' +
      'Стыдом и страхом замираю...\n' +
      'Но мне порукой ваша честь,\n' +
      'И смело ей себя вверяю...\n' +
      '        ***',
      'color:#c41a1a;line-height:1.5;font-style: italic;'
    );
    console.log('%cНадеюсь, вам понравилось так же, как и мне.\nСпасибо, что заинтересовались моим резюме.\nДо свидания!', 'color:#1a6fa8;');
  } else {
    console.log(
      '%cSince you\'re here and I\'ve got your attention...\n' +
      'I want to share with you a famous stanza from the novel in verse — Eugene Onegin by Alexander Pushkin. Enjoy!',
      'color:#d4881a;font-weight:bold;line-height:1.5;'
    );
    console.log('%c*** Tatyana\'s Letter to Onegin ***', 'color:#c41a1a;font-weight:bold;line-height:1.5;font-style: italic;');
    console.log(
      '%cI\'m writing you this declaration\n' +
      'What more can I in candour say?\n' +
      'It may be now your inclination\n' +
      'To scorn me and to turn away;\n' +
      'But if my hapless situation\n' +
      'Evokes some pity for my woe,\n' +
      'You won\'t abandon me, I know.\n' +
      'I first tried silence and evasion;\n' +
      'Believe me, you \'d have never learned\n' +
      'My secret shame, had I discerned\n' +
      'The slightest hope that on occasion\n' +
      'But once a week I\'d see your face,\n' +
      'Behold you at our country place,\n' +
      'Might hear you speak a friendly greeting,\n' +
      'Could say a word to you; and then,\n' +
      'Could dream both day and night again\n' +
      'Of but one thing, till our next meeting.\n' +
      'They say you like to be alone\n' +
      'And find the country unappealing;\n' +
      'We lack, I know, a worldly tone,\n' +
      'But still, we welcome you with feeling.\n\n' +
      'Why did you ever come to call?\n' +
      'In this forgotten country dwelling\n' +
      'I\'d not have known you then at all,\n' +
      'Nor known this bitter heartache\'s swelling.\n' +
      'Perhaps, when time had helped in quelling\n' +
      'The girlish hopes on which I fed,\n' +
      'I might have found (who knows?) another\n' +
      'And been a faithful wife and mother,\n' +
      'Contented with the life I led.\n\n' +
      'Another! No! In all creation\n' +
      'There\'s no one else whom I\'d adore;\n' +
      'The heavens chose my destination\n' +
      'And made me thine for evermore!\n' +
      'My life till now has been a token\n' +
      'In pledge of meeting you, my friend;\n' +
      'And in your coming, God has spoken,\n' +
      'You\'ll be my guardian till the end...\n' +
      'You filled my dreams and sweetest trances;\n' +
      'As yet unseen, and yet so dear,\n' +
      'You stirred me with your wondrous glances,\n' +
      'Your voice within my soul rang clear...\n' +
      'And then the dream came true for me!\n' +
      'When you came in, I seemed to waken,\n' +
      'I turned to flame, I felt all shaken,\n' +
      'And in my heart I cried: It\'s he!\n' +
      'And was it you I heard replying\n' +
      'Amid the stillness of the night,\n' +
      'Or when I helped the poor and dying,\n' +
      'Or turned to heaven, softly crying,\n' +
      'And said a prayer to soothe my plight?\n' +
      'And even now, my dearest vision,\n' +
      'Did I not see your apparition\n' +
      'Flit softly through this lucent night?\n' +
      'Was it not you who seemed to hover\n' +
      'Above my bed, a gentle lover,\n' +
      'To whisper hope and sweet delight?\n' +
      'Are you my angel of salvation\n' +
      'Or hell\'s own demon of temptation?\n' +
      'Be kind and send my doubts away;\n' +
      'For this may all be mere illusion,\n' +
      'The things a simple girl would say,\n' +
      'While Fate intends no grand conclusion...\n' +
      'So be it then! Henceforth I place\n' +
      'My faith in you and your affection;\n' +
      'I plead with tears upon my face\n' +
      'And beg you for your kind protection.\n' +
      'You cannot know: I\'m so alone,\n' +
      'There\'s no one here to whom I\'ve spoken,\n' +
      'My mind and will are almost broken,\n' +
      'And I must die without a moan.\n' +
      'I wait for you... and your decision:\n' +
      'Revive my hopes with but a sign,\n' +
      'Or halt this heavy dream of mine\n' +
      'Alas, with well-deserved derision!\n\n' +
      'I close. I dare not now reread...\n' +
      'I shrink with shame and fear.\n' +
      'But surely, Your honour\'s all the pledge\n' +
      'I need, And I submit to it securely.' +
      '\n\n * Translated by James E. Falen * \n\n',
      'color:#c41a1a;line-height:1.5;font-style: italic;'
    );
    console.log('%cI hope you enjoyed it like I did.\nThank you for being interested in my resume.\nFarewell!', 'color:#1a6fa8;');
  }
}

Object.defineProperty(window, 'resume', { get: showEasterEgg });
