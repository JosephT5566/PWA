import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export default function ProfilePage() {
    const onGetYoutubes = () => {
        window.gapi.load('client', () => {
            window.gapi.client
                .init({
                    apiKey: 'AIzaSyCrCFtI5SBI9NclTDJlPmIP80yzL-brpzM',
                })
                .then(() =>
                    window.gapi.client.request({
                        path:
                            'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_XRq7JriAORvDe1lI1RAsA&maxResults=10&order=date',
                    })
                )
                .then((response) => console.log(response.result));
        });
    };
    return (
        <div>
            <h2 className="ui h2">Data</h2>
            <Divider />
            <Button variant="contained" color="primary" onClick={onGetYoutubes}>
                Get youtube
            </Button>
        </div>
    );
}
