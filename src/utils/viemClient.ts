import { createPublicClient, http } from 'viem'
import { arbitrumSepolia, mainnet, polygon } from 'viem/chains'

export const viemPublicClientEth = createPublicClient({
  chain: mainnet,
  transport: http()
})

export const viewPublicClientPolygon = createPublicClient({
  chain: polygon,
  transport: http()
})

export const arbitrumSepoliaPublicClient = createPublicClient({
  chain: arbitrumSepolia,
  transport: http()
})