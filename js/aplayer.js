const neteaseMusics = {};
/* 默认APi服务地址 */
const neteaseMusicApiHost = 'https://netease-cloud-music-api-olive-beta.vercel.app/';
/* 默认歌单 */
const playerListId = '2648810173';
const initAPlayer = (id, limit) => {
    id = id || playerListId;
    /* 对歌曲数量进行限制 */
    limit = limit === undefined || limit <= 0 ? 10 : limit > 50 ? 50 : limit;
    let player = document.getElementById('player');
    if (!player) {
        player = document.createElement('div');
        player.id = 'player';
        document.body.appendChild(player)
    }
    /* 调用 歌单详情接口 */
    $.get(`${neteaseMusicApiHost}/playlist/detail?id=${id}`, ({playlist: {tracks}}) => {
        if (tracks && tracks.length > 0) {
            const musicMap = {};
            tracks.slice(0, limit).forEach(item => {
                const {id, name, ar, al} = item;
                const musicDetail = {name};
                if (ar && ar.length > 0) {
                    musicDetail['artist'] = ar.map(a_r => a_r.name).join(',')
                }
                if (al && al['picUrl']) {
                    musicDetail['cover'] = al['picUrl']
                }
                musicMap[`id_${id.toString()}`] = musicDetail
            });
            /* 调用获取歌曲 Url 接口 */
            $.get(`${neteaseMusicApiHost}/song/url?id=${Object.keys(musicMap)
                .map(id => id.substring(3)).join(',')}`, ({data}) => {
                if (data && data.length > 0) {
                    data.forEach(music => {
                        const {id, url} = music;
                        const key = `id_${id.toString()}`;
                        if (url) neteaseMusics[key] = {...musicMap[key], url}
                    });
                    renderAPlayer();
                }
            })
        }
    })
};
const renderAPlayer = () => {
    /* HLS 支持,需要导入 hls.js */
    const customAudioType = {
        'customHls': function (audioElement, audio, player) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(audio.url);
                hls.attachMedia(audioElement)
            } else if (audioElement.canPlayType('application/x-mpegURL') ||
                audioElement.canPlayType('application/vnd.apple.mpegURL')) {
                audioElement.src = audio.url
            } else {
                player.notice('Error: HLS is not supported.')
            }
        }
    };
    /* 参数配置请参考官方文档 */
    const aPlayer = new APlayer({
        container: player,
        fixed: true,
        autoplay: false,
        order: 'random',
        customAudioType: customAudioType
    });
    aPlayer.list.add(Object.values(neteaseMusics))
};
(function () {
    /* 移动端不初始化 APlayer */
    ((document.body.clientWidth || document.body.offsetWidth || window.screen.availWidth) > 450) && initAPlayer();
}());
