import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  // 더미 데이터 추가
  const followerList = [
    { nickname: '정국' },
    { nickname: 'RM' },
    { nickname: '제이홉' },
  ];

  const followingList = [
    { nickname: '슈가' },
    { nickname: '뷔' },
    { nickname: '진' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      {/* 화면 구성 변경 */}
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
