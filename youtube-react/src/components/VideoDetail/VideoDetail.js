import React, { useContext } from 'react'
//パスやサーチパラメータの取得が可能
import { Store } from '../../store/index'
import VideoPlay from '../VideoPlay/VideoPlay'
import Style from './VideoDetail.module.scss'
import Linkify from 'react-linkify'


const VideoDetail = () => {
  const { globalState } = useContext(Store)
  //以下のように三項演算子を使うことでデータがある時/ない時の表示を分けることが可能
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      {/*  LinkfyはURLなどを自動的にリンク可してくれるもの */}
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (<span>no data</span>)
}

export default VideoDetail
