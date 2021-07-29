body = $response.body.replace(/vip":0/g, 'vip":0').replace(/vip_expire_at":null/g, 'vip_expire_at":"1800000000"').replace(/vip_type":""/g, 'vip_type":"2"');
$done({body}); 
