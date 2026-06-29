import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	// Next.js requires this render signature for custom Document.
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
