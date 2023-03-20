import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'

interface IHome {}

const Index: NextPage<IHome> = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div>Hello, world.</div>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}

export default Index
