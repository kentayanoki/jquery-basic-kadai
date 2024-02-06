$(window).on('load scroll', (e) => {
    // loadイベントが発生した場合
    if(e.type === 'load'){
      console.log('loadイベントが発生しました');
    }
    //scrollイベントが場合実施された
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });