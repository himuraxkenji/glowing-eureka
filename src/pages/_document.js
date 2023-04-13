import Document, {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';
class MyDocument extends Document {
    render() {return(
        <Html lang="es">
            <Head>
                <title>Next Shop</title>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-J8YV20TBLP" strategy="afterInteractive">
                </Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {
                        `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'G-J8YV20TBLP');`
                    }
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )}
}

export default MyDocument;