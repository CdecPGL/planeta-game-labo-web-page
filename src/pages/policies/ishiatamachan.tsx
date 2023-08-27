import React from 'react';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Layout from '../../components/Layout';
import { HeadFC } from 'gatsby';
import HeadContent from '../../components/HeadContent';
import SubHeading from '../../components/SubHeading';
import UnorderedList from '../../components/UnorderedList';

const PolicyIchiatamachanPage: React.FC = function () {
  return (
    <Layout>
      <Heading>「伸縮性の高い石頭少女いしあたまーるちゃん」プライバシーポリシー</Heading>
      <Paragraph>
        伸縮性の高い石頭少女いしあたまーるちゃん（以下、「当アプリ」と言います。）はPlanetaGameLaboが開発・公開しているゲームアプリです。
        PlanetaGameLaboは、お客様からお預かりする個人情報を含むユーザー情報の重要性を強く認識しており、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、ユーザー情報を安全かつ適切に取り扱うことを宣言します。
      </Paragraph>
      <SubHeading>１．収集するユーザー情報と利用目的</SubHeading>
      <Paragraph>
        当アプリでは、広告の表示のみを目的としてユーザー情報を収集しています。
        広告の表示には第三者であるUnity社の広告サービス（Unity
        Ads）を利用しており、以下の情報が収集および利用されます。
      </Paragraph>
      <UnorderedList>
        <li>
          ユーザーのおおよその位置情報:
          広告やマーケティング、分析、アプリの機能、不正防止、セキュリティ、コンプライアンス
        </li>
        <li>ユーザーの個人ID: アプリの機能</li>
        <li>ユーザーの購入履歴※: 広告またはマーケティング、分析</li>
        <li>
          アプリで表示したページやタップした項目に関するデータ（広告自体のみが対象）:
          広告やマーケティング、分析、不正防止、セキュリティ、コンプライアンス
        </li>
        <li>
          その他アプリのアクティビティに関するデータ（アプリの使用時間に関するデータ）※:
          広告やマーケティング、分析、不正防止、セキュリティ、コンプライアンス
        </li>
        <li>アプリの診断情報: アプリの機能、分析</li>
        <li>
          ユーザーのデバイスやその他のIDに関するデータ:
          広告やマーケティング、分析、アプリの機能、不正防止、セキュリティ、コンプライアンス
        </li>
      </UnorderedList>
      <SubHeading>2. 収集するユーザー情報の管理と第三者提供</SubHeading>
      <Paragraph>
        当アプリにおいて、Unity
        AdsによりUnity社に収集されたデータの管理と第三者提供については、Unity社のプライバシーポリシーに準じます。
        詳細は
        <a href='https://unity.com/ja/legal/game-player-and-app-user-privacy-policy' target='blank'>
          こちら
        </a>
        をご覧ください。
      </Paragraph>

      <SubHeading>3. 本ポリシーの変更について</SubHeading>
      <Paragraph>
        PlanetaGameLaboは、法令の制定、改正等により、本ポリシーを適宜見直し、予告なく変更する場合があります。
        本ポリシーの変更は、変更後の本ポリシーが当サイトに掲載された時点、またはその他の方法により変更後の本ポリシーが閲覧可能となった時点で有効になります。
        <br />
        また、Unity Adsに関わるプライバシーポリシーの変更については、
        <a href='https://unity.com/ja/legal/game-player-and-app-user-privacy-policy' target='blank'>
          Unity社のプライバシーポリシー
        </a>
        に準じます。
      </Paragraph>

      <Heading>「伸縮性の高い石頭少女いしあたまーるちゃん」利用規約</Heading>
      <Paragraph>
        伸縮性の高い石頭少女いしあたまーるちゃん（以下、「当アプリ」と言います。）はPlanetaGameLaboが開発・公開しているゲームアプリです。
        本規約では、当アプリを利用するに当たり、ユーザーの皆様に遵守していただきたい事項を定めています。
      </Paragraph>
      <SubHeading>1. 無断転載・複製の禁止</SubHeading>
      <Paragraph>
        PlanetaGameLaboは、当アプリで使用している画像・音楽・効果音・フォント等の著作物を無断で複製し、転載することを禁じます。
        <br />
        当アプリでは、PlanetaGameLaboが作成した素材及び第三者提供の素材を利用しています。
        当アプリおよびPlanetaGameLaboが作成した素材の著作権はPlanetaGameLaboが保有します。
        第三者提供の素材として以下のWebサイトで提供していただいている素材を各サイトの規約に従い使用させていただいており、これらの素材の著作権は素材提供元が保有します。
      </Paragraph>
      <UnorderedList>
        <li>
          <a href='https://pansound.com/panicpumpkin/music/kiyaku.html' target='blank'>
            PUNICPUMPKIN
          </a>
          様（音楽）
        </li>
        <li>
          <a href='https://soundeffect-lab.info/agreement/' target='blank'>
            効果音ラボ様（効果音）
          </a>
        </li>
        <li>
          <a href='https://taira-komori.jpn.org/welcome.html' target='blank'>
            無料効果音で遊ぼう！
          </a>
          様（効果音）
        </li>
        <li>
          <a href='https://otologic.jp/free/license.html' target='blank'>
            OtoLogic
          </a>
          様（効果音）
        </li>
        <li>
          <a href='https://cute-freefont.flop.jp/dragonquestfcintact.html' target='blank'>
            すらいむのへや
          </a>
          様（フォント）
        </li>
      </UnorderedList>

      <SubHeading>2. 実況</SubHeading>
      <Paragraph>
        本アプリは、報告なく実況動画の投稿や配信を行っていただいて構いません。
        ただし、動画や配信の説明欄に、以下のいずれかのリンクを記載してください。
      </Paragraph>

      <UnorderedList>
        <li>当アプリのGoogleストアページ: https://play.google.com/store/apps/details?id=com.PlanetaGameLabo.Isiatamaaruchan</li>
        <li>当アプリのWindows向け配信ページ: https://www.freem.ne.jp/win/game/9197</li>
        <li>当アプリの公式ページ: https://planetagamelabo.com/games/ishiatamachan/</li>
      </UnorderedList>

      <SubHeading>2. 免責事項</SubHeading>
      <Paragraph>
        PlanetaGameLaboは、当アプリのダウンロード、利用に起因して生じる結果に対し、一切の責任を負いません。
      </Paragraph>

      <SubHeading>3. 本規約の変更について</SubHeading>
      <Paragraph>
        PlanetaGameLaboは、法令の制定、改正等により、本規約を適宜見直し、予告なく変更する場合があります。
        本規約の変更は、変更後の本規約が当サイトに掲載された時点、またはその他の方法により変更後の本規約が閲覧可能となった時点で有効になります。
      </Paragraph>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <HeadContent
    pageTitle='「伸縮性の高い石頭少女いしあたまーるちゃん」ポリシーと規約'
    pageDescription='「伸縮性の高い石頭少女いしあたまーるちゃん」ポリシーと規約'
  />
);

export default PolicyIchiatamachanPage;
