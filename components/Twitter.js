import { Timeline } from 'react-twitter-widgets'
import styles from '../styles/Twitter.module.css'

export default function Twitter() {
    const twitterArr = ['wallstreetbets', 'elonmusk', 'stoolpresidente', 'vladtenev', 'WSBMemes', 'TheRoaringKitty', 'ChartPlug' ]

    const twitterTile = twitterArr.map((item, index) => (
        <div style={{maxWidth: "20rem", padding: '0'}} className="card mx-4 my-4 " key={index}>
                <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: `${item}`
                }}
                options={{
                    height: '400',
                    width: '300'
                }}
            />
        </div>
    )
)

    return (
        <div className="container-md"  id="twitter" className={styles.container}>
        <h2 className="text-center">Twitter 💬</h2>
            <div className="row align-items-center justify-content-center" >
            {twitterTile}
            </div>
        </div>
    )
}