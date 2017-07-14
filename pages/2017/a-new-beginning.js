import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import P from '../../components/post/paragraph'
import { H2, H3 } from '../../components/post/heading'
import { Ref, FootNotes, Note } from '../../components/post/footnotes'
import Link from 'next/prefetch'

export default () => (
  <Post>
    <Head><title>A New Beginning</title></Head>
    <Title>A New Beginning</Title>
    
    <P>This is a new beginning, may it be fruitful</P>
    
    <P>بسم الله</P>
   
   </Post>

    )
