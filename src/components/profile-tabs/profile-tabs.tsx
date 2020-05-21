import React from 'react';
import style from './profile-tabs.module.scss';

interface IProfileTabsComponentProps {
  tabs: string[];
  currentTab: number;
  onTabSelected: (tab: number) => void;
}
export const ProfileTabsComponent = (props: IProfileTabsComponentProps) => {
  return (
    <div className={style['profile-tabs']}>
      <ul>
        {props.tabs.map((tab: string, key: number) => (
          <li
            className={style[props.currentTab === key ? 'profile-tabs-active' : '']}
            onClick={() => props.onTabSelected(key)}
            key={key}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};
