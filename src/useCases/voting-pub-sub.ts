type Message = { pollOptionId: string, votes: number }
type Subscriber = (message: Message) => void

class VotingPubSubUseCase {
    private channels: Record<string, Subscriber[]> = {}

    // ouvindo subscriber no canal
    subscribe(pollId: string, subscriber: Subscriber) {
        if (!this.channels[pollId]) {
            this.channels[pollId] = []
        }

        this.channels[pollId].push(subscriber)
    }

    // publicando
    publish(pollId: string, message: Message) {
        if (!this.channels[pollId]) {
            return
        }

        for (const subscriber of this.channels[pollId]) {
            subscriber(message)
        }
    }
}

export const voting = new VotingPubSubUseCase()