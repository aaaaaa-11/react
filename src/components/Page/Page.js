import React from 'react';
import PageLayout from './PageLayout'
import Link from './Link';
import Avatar from './Avatar'

export default function Page (props) {
  const user = props.user
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  )
  return <PageLayout userLink={userLink} />
}
