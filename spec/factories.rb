Factorybot.define do
  factory :user, alias: :steven do
    first_name "Steven"
    last_name "Alpha"

    trait :kevin do
      first_name "Kevin"
      last_name "Beta"
    end
  end

end