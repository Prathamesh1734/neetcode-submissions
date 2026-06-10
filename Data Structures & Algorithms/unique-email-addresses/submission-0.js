class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let set = new Set()
        for(let email of emails){
            let [local,domain] = email.split("@")
            local = local.split("+")[0]
            local = local.replace(/\./g,"")
            set.add(`${local}@${domain}`)
        }
        return set.size
    }
}
