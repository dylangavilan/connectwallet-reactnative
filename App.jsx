import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React from "react";
import { Button, View } from "react-native";
export default function App() {
  const connector = useWalletConnect();
  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);
  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);
  return (
    <View>
      {!connector.connected && (
        <Button title="Connect wallet" onPress={connectWallet} />
      )}
      {!!connector.connected && (
        <Button title="Disconnect" onPress={killSession} />
      )}
    </View>
  );
}
