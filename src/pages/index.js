import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Toolbox Portal"
      description="Documentation des bibliothèques Toolbox">

      <main
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
        }}
      >
        <h1>Toolbox Portal</h1>

        <p>
          Documentation technique des bibliothèques Toolbox.
        </p>

        <Link
          className="button button--primary button--lg"
          to="/docs/toolbox-notification">
          Accéder à Toolbox Notification
        </Link>
      </main>
    </Layout>
  );
}